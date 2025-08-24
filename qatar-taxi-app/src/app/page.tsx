import RideForm from "@/components/RideForm";
import CustomerLedger from "@/components/CustomerLedger";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import HeroScene from "@/components/HeroScene";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <HeroScene />
      <div className="max-w-md mx-auto">
        <AnimatedWrapper>
          <h2 className="text-2xl font-bold mb-4">Add a New Ride</h2>
          <RideForm />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <CustomerLedger />
        </AnimatedWrapper>
      </div>
    </div>
  );
}
