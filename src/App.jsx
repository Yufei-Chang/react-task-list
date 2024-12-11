// importo l'array di oggetti su cui devo lavorare
import tasks from "./listObj";
// console.log(tasks); funziona
function App() {
  // Uso filter per trovare gli task con lo status NON COMPLETATO
  const backlogTask = tasks.filter(tasks => tasks.state !== 'completed');
  // Con filter cerco gli task con status COMPLETATO
  const completedTask = tasks.filter(tasks => tasks.state === 'completed');

  // faccio una variabile in cui metto i singoli oggetti di tasks
  return (
    <div className="container">
      <h2>Completed Tasks {completedTask.length}</h2>
      <ul>
        { //uso map per leggere tutti i task completati e li stampo in pagina con return
          completedTask.map((tasks, i) => {
            return (
              // imposto una lista con le info da stampare e uso i tags per dividerli
              <li key={i}>
                <h3>{tasks.title}</h3>
                <p>{`priority: ${tasks.priority}`}</p>
                <p>{`Est. time: ${tasks.estimatedTime}`}</p>
              </li>
            )
          })
        }
      </ul>

      <h2>Backlog Tasks {backlogTask.length}</h2>
      <ul>
        { //uso map per leggere tutti i task ancora da completare e li stampo in pagina con return
          backlogTask.map((tasks, j) => {
            return (
              // imposto una lista con le info da stampare e uso i tags per dividerli
              <li key={j}>
                <h3>{tasks.title}</h3>
                <p>{`priority: ${tasks.priority}`}</p>
                <p>{`Est. time: ${tasks.estimatedTime}`}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App