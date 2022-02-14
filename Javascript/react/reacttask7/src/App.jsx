import { useEffect, useState } from 'react'
import Create from './components/create'

export const header = {
  "Content-Type": "application/json;charset=utf-8",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
}
export const headerPost = {
  "Content-Type": "application/json;charset=utf-8",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
}

function App() {
  const [list, setList] = useState([])

  const Send = () => {
    fetch("https://api.themoviedb.org/4/account/5f198024a6d931003787052f/lists", {
      headers: header
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        json.results.forEach(element => {
          GetList(element.id)
        });
      }).catch(e => console.error(e))
  }

  const GetList = (id) => {
    fetch("https://api.themoviedb.org/4/list/" + id, {
      headers: header
    }).then(e => e.json()).then(e => {
      setList([...e.results, ...list])
    }).catch(e => console.error(e))
  }

  return (
    <>
      {/* <button className="bg-black text-white p-10" onClick={Send}>
        Send
      </button>
      {list.length > 0 ? list.map(s => <div key={s.id}>{s.name ?? s.title}</div>) : "No data"} */}
      <Create />
    </>
  );
}

export default App;