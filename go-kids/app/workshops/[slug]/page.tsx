import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkshopBySlug } from "@/lib/data/workshops";
import WorkshopDetailClient from "@/components/workshops/WorkshopDetailClient";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db/connect";
import EnrollmentModel from "@/lib/db/models/Enrollment";
import mongoose from "mongoose";

// Dynamic rendering — page is generated on-demand, not at build time.
// This means new workshops added to MongoDB are immediately available.
export const dynamic = "force-dynamic";

// Per-workshop SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const workshop = await getWorkshopBySlug(slug);
  if (!workshop) return { title: "Workshop Not Found — Go Kids India" };

  return {
    title: `${workshop.title} — Go Kids India`,
    description: workshop.shortDescription,
    openGraph: {
      title: workshop.title,
      description: workshop.shortDescription,
      images: [workshop.thumbnail],
    },
  };
}

export default async function WorkshopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workshop = await getWorkshopBySlug(slug);
  if (!workshop) notFound();

  const session = await auth();
  let isEnrolled = false;

  if (session?.user?.id) {
    const parentId = (session.user as { id?: string }).id;
    if (parentId) {
      await connectDB();
      const exists = await EnrollmentModel.exists({
        parentId: new mongoose.Types.ObjectId(parentId),
        workshopId: new mongoose.Types.ObjectId(workshop._id),
      });
      isEnrolled = !!exists;
    }
  }

  return (
    <WorkshopDetailClient
      workshop={workshop}
      isLoggedIn={!!session?.user?.id}
      isEnrolled={isEnrolled}
    />
  );
}
