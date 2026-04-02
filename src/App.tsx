import Header from "@/components/Header"
import { useState } from "react"

function App() {
  const [tab, setTab] = useState<number>(0);

  return (
    <>
      <Header
        tab={tab}
        setTab={setTab}
      />
      <main className="min-h-dvh">

      </main>
    </>
  )
}

export default App
