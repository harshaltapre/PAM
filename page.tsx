import CircuitDiagram from "../circuit-diagram"
import FirmwareCode from "../firmware-code"
import MobileApp from "../mobile-app"
import OptimizationAlgorithm from "../optimization-algorithm"

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">High-Performance Line Follower Robot</h1>

      <div className="grid gap-8">
        <CircuitDiagram />
        <FirmwareCode />
        <MobileApp />
        <OptimizationAlgorithm />
      </div>
    </main>
  )
}
