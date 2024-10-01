function RegisterForm() {
    return (
      <form>
        <TextInput label="Nombre" />
        <TextInput label="Email" />
        <TextInput label="Contraseña" type="password" />
        <Button text="Registrarse" />
      </form>
    );
  }