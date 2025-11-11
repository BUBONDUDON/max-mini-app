import Button from "@/shared/UI/Button/Button";
import logo from "../../../public/logo.png";
import style from "./login.module.css";

function LoginPage() {
  //Две кнопки:
  // 1 Клиент
  // 2 ИП/Самозанятый
  // Автоматом подтягиваем всю инфу либо в бдшку либо из бдшки из объекта user (макс)
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" />
      <h1>Регистрация</h1>
      <input type="text" className={style.input} placeholder="Логин" />
      <input type="password" className={style.input} placeholder="Пароль" />
      <input
        type="password"
        className={style.input}
        placeholder="Повторите пароль"
      />

      <Button text="Зарегестрироваться" />
    </div>
  );
}

export const Component = LoginPage;
