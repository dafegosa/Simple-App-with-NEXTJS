
const List = ({ users }) => {
  return (
    <ul className="list-group">
      {users.map((user) => {
        return (
          <li 
          className="list-group-item list-group-item-action"
          key={user.id}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="pl-4">
                <h4 className="m-0 p-0">{user.first_name} {user.last_name}</h4> 
                <p>{user.email}</p>
              </div>
              <div>
                <img src={user.avatar} class="rounded-circle z-depth-2 mx-auto d-block" alt="User image"/>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default List