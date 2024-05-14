import MovieBasic from './basic'
import MovieExpanded from './expanded'

const Hero = () => {
  return (
    <>
      <div className="lg:hidden m-4">
        <MovieBasic />
      </div>
      <div className="hidden lg:block">
        <MovieExpanded />
      </div>
    </>
  )
}

export default Hero
