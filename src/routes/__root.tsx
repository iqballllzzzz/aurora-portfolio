import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";

// Import layout komponenmu di sini
// import { Navbar, Footer } from "@/components/layout";

function NotFoundComponent() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ maxWidth: "28rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>404</h1>
        <p style={{ marginTop: "0.5rem" }}>Halaman tidak ditemukan.</p>
        <Link to="/" style={{ display: "inline-block", marginTop: "1rem" }}>← Kembali ke beranda</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ maxWidth: "28rem", textAlign: "center" }}>
        <h1>Terjadi kesalahan</h1>
        <p style={{ marginTop: "0.5rem", color: "#666" }}>Coba refresh atau kembali ke beranda.</p>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "1rem" }}>
          <button onClick={() => { router.invalidate(); reset(); }}>Coba lagi</button>
          <a href="/">Beranda</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Taruh Navbar di sini kalau ada */}
      <main>
        <Outlet />
      </main>
      {/* Taruh Footer di sini kalau ada */}
    </QueryClientProvider>
  );
}
