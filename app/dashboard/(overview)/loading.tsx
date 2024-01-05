// new
import DashboardSkeleton from "../../ui/skeletons";

export default function Loading() {
    return <DashboardSkeleton />;
    // blurred outline of the page is shown until it appears

    // return <div>Loading ... </div>;
}

// loading.tsx is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.
// Since <Sidebar> is static, so it's shown immediately. The user can interact with <Sidebar> while the dynamic content is loading.
// The user doesn't have to wait for the page to finish loading before navigating away (this is called interruptable navigation).
// https://nextjs.org/learn/dashboard-app/streaming

// Loading skeleton

// Streaming a page
// Since loading.tsx is a level higher than /invoices/page.tsx and /customers/page.tsx in the file system, it's automatically applied to those pages.
// To avoid this, put loading.tsx in a new folder-- dashboard/(overview)  to only apply to the dashboard

// Streaming a component
//
