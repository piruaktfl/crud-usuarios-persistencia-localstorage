const mixin = {
  data () {
    return {
      mFirstLoad: false,
      mMsg: '',
      mSucesso: ''
    }
  },
  computed: {
    $cNome () {
      return !this.form.nome.length && this.mFirstLoad
    },
    $cSenha () {
      return !this.form.senha.length && this.mFirstLoad
    },
    $cEmail () {
      return !this.form.email.length && this.mFirstLoad
    },
    $cRepeteSenha () {
      return (this.form.senha !== this.senhaRepete) && this.mFirstLoad
    }
  },
  watch: {
    mSucesso () {
      setTimeout(() => {
        this.mSucesso = ''
      }, 3000)
    }
  }
}

export default mixin
