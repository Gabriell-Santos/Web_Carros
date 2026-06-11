import { Container } from "../../components/Container/index";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import { Input } from "../../components/input/index";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { auth } from "../../services/firebase/ConnectionFirebase";

const schema = z.object({
  email: z.string().email("Insira um email válido"),

  password: z.string().nonempty("Senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function submit(data: FormData) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        navigate("/dashboard");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container>
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <Link to="/" className="flex justify-center mb-8">
            <img src={LogoImg} className="h-12 object-contain" alt="Logo" />
          </Link>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-1">
              Bem-vindo de volta
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Faça login para continuar
            </p>

            <form
              onSubmit={handleSubmit(submit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="exemplo@email.com"
                  name="email"
                  register={register}
                  error={errors?.email?.message}
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
                  register={register}
                  error={errors?.password?.message}
                />
              </div>

              <div className="flex justify-end">
                <Link
                  to="/register"
                  className="text-xs text-red-600 hover:text-red-700 transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
              >
                Entrar
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Não tem uma conta?{" "}
              <Link
                to="/register"
                className="red-blue-600 hover:text-red-700 font-medium transition-colors"
              >
                Criar conta
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
