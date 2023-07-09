const formSubmitHanlder = (e) => {
    e.preventDefault();
    // console.log(form.current);
    emailjs
      .sendForm(
        "service_fg9bwck",
        "template_63bmji5",
        form.current,
        "QDxMsey5tbPkQMA8M"
      )
      .then(
        (result) => {
          setTimeout(() => {
            setOpen(false);
          }, 2000);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };