import "./roadmap.css"
import RoadmapTasks from "./RoadmapTasks"

const Roadmap = () => {
  const futureFeatures = new Map([
    ["Voting system", "Users can vote on, which features should be top priority"],
    ["Calculator", 'Basic calculator that can do "+, -, * and /"'],
    ["Labyrint game", "A game where you should find the path from start to end"],
    ["Feedback system", "Where users can report bugs or make wishes about features"],
    ["Drawing wall", "Users can paint on it and every midnight it gets emptied"]
  ])

  const underProgress = new Map([
    ["Chat", "A chat forum "]
  ])

  const completed = new Map([
    ["Home", "Home page with info about me and links to my profiles"],
    ["Weather", "Shows temperature and wind in the city you choose"]
  ])


  return (
    <div className="roadmap-grid-container">
      <div>
        <h1 className="header">Roadmap</h1>
        <p>Place your mouse on the titles for more info</p>
      </div>
      <div className="flex-body">
        <div className="coming roadmap-boxes">
          <h2> In future</h2>
          <RoadmapTasks map={futureFeatures} />
        </div>
        <div className="working roadmap-boxes"> 
          <h2> Under progress</h2>
          <RoadmapTasks map={ underProgress} />
        </div>
        <div className="done roadmap-boxes">
          <h2> Completed </h2>
          <RoadmapTasks map={ completed} />
        </div>
      </div>
    </div>
  )
}

export default Roadmap