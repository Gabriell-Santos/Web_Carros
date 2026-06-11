import { Container } from "../../components/Container/index";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import { Input } from "../../components/input/index";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Digite seu nome"),
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("O email é obrigatório"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .nonempty("Senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function submit(data: FormData) {
    console.log(data);
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
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-1">
                Criar sua conta
              </h1>
              <p className="text-sm text-gray-500">
                Preencha os dados abaixo para se registrar
              </p>
            </div>

            <form
              onSubmit={handleSubmit(submit)}
              className="flex flex-col gap-4"
            >
              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Nome completo
                </label>
                <Input
                  type="text"
                  placeholder="João Silva"
                  name="name"
                  register={register}
                  error={errors.name?.message}
                />
              </div>

              {/* Email */}
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

              {/* Senha */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <Input
                  type="password"
                  placeholder="Defina sua senha"
                  name="password"
                  register={register}
                  error={errors?.password?.message}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-medium py-2.5 rounded-lg transition-colors mt-1"
              >
                Criar conta
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Já tem uma conta?
              <Link
                to="/login"
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Fazer login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
