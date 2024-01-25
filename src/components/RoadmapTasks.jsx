const RoadmapTasks = ({ map }) => {
  const keyGen = () => {
    return Math.random() * 1000000
  }

  return (
    <div className="tasks-flex">
      {Array.from(map.entries()).map(([task, info]) => {
        return(
          <div className="inner" key={keyGen()}>
            <h5 className="task">{task}</h5>
            <p className="onhover">
              {info}
            </p>
          </div>
        )
      })}
    </div>
    
  )
}

export default RoadmapTasks