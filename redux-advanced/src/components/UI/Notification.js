export default function Notification({ status, title, message }) {
  return (
    <div>
      <h2>
        <ul>
          <li>{status}</li>
          <li>{title}</li>
          <li>{message}</li>
        </ul>
      </h2>
    </div>
  );
}
