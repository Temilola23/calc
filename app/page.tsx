export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-barbie-gold w-8 h-8 animate-bounce-slow" />
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Barbie Calc
          </h1>
          <Heart className="text-barbie-gold w-8 h-8 animate-bounce-slow" />
        </div>
        <p className="text-xl md:text-2xl text-white/90 font-medium">
          Math has never been this glamorous! ✨
        </p>
      </div>

      {/* Calculator Section */}
      <div className="flex justify-center">
        <div className="barbie-card p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-barbie-dark mb-2">
              Fabulous Calculator
            </h2>
            <p className="text-barbie-dark/70">
              Calculate in style! 💖
            </p>
          </div>
          <Calculator />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="barbie-card p-6 text-center">
          <div className="text-4xl mb-4">💖</div>
          <h3 className="text-xl font-bold text-barbie-dark mb-2">Glamorous Design</h3>
          <p className="text-barbie-dark/70">
            Beautiful pink theme with sparkles and gradients
          </p>
        </div>
        <div className="barbie-card p-6 text-center">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-bold text-barbie-dark mb-2">Full Featured</h3>
          <p className="text-barbie-dark/70">
            Complete calculator with history and memory functions
          </p>
        </div>
        <div className="barbie-card p-6 text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold text-barbie-dark mb-2">Responsive</h3>
          <p className="text-barbie-dark/70">
            Works perfectly on all devices and screen sizes
          </p>
        </div>
      </div>
    </div>
  )
}