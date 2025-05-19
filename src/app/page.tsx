import CoverParticles from "@/components/coverParticles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transitionPage";


export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen bg-no-repeat bg-[linear-gradient(90.21deg,rgba(189,47,109,0.5)_-5.91%,rgba(118,197,231,0.5)_111.58%)]">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
