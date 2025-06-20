import Link from "next/link";

interface AuthFormProps {
  title: string;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
  buttonText: string;
  linkText: string;
  linkHref: string;
}

export default function AuthForm({
  title,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  error,
  buttonText,
  linkText,
  linkHref,
}: AuthFormProps) {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {buttonText}
        </button>
      </form>
      <p className="mt-4 text-center">
        <Link href={linkHref} className="text-blue-500 hover:underline">
          {linkText}
        </Link>
      </p>
      {title === "Login" && (
        <p className="mt-2 text-center">
          <Link href="/auth/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </p>
      )}
    </div>
  );
}