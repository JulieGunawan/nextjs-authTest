export default function UserProfilePage({params}: any) {
  return (
    <div className = "flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-2xl">Profile Page: {params.id}</p>
    </div>
  );
}