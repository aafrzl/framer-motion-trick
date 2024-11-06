import ButtonDelete from "./components/button-delete"
import CheckoutBtn from "./components/checkout-btn"

function App() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center">
        Hello, TokTok! 🚀
      </h1>
      <CheckoutBtn />
      <ButtonDelete />
    </div>
  )
}

export default App
