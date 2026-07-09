function ContainerCard({ container }) {
  return (
    <div className="container-card">
      <div className="card-header">
        <h2 className="card-title">{container.name}</h2>
        <span className={`status ${container.status}`}>
          {container.status}
        </span>
      </div>

      <div className="card-body">
        <div className="row">
          <span className="label">ID</span>
          <span classname=>{container.id}</span>
        </div>

        <div className="row">
          <span className="label">Image</span>
          <span>{container.image}</span>
        </div>

        <div className="row">
          <span className="label">Created</span>
          <span>{container.created}</span>
        </div>
      </div>
    </div>
  );
}

export default ContainerCard;