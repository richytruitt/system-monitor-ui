function ContainerCard({ container }) {
  return (
    <article className="card">
      <h2>{container.name}</h2>

      <p>
        <strong>ID:</strong> {container.id}
      </p>

      <p>
        <strong>Image:</strong> {container.image}
      </p>

      <p>
        <strong>Status:</strong> {container.status}
      </p>

      <p>
        <strong>Created:</strong> {container.created}
      </p>
    </article>
  );
}

export default ContainerCard;