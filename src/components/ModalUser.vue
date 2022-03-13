<template>
  <div class="container-modal" @click.self="$store.commit('openCloseModal' ,false)">
    <div class="box-modal">
      <div class="box-header">
        <span>Cadastro de novo usuário</span>
        <button @click.prevent="$store.commit('openCloseModal' ,false)">x</button>
      </div>
      <div class="form">
        <label for="">nome</label>
        <input :class="{error: $cNome}" v-model="form.nome" type="text" placeholder="Seu nome" />
        <label for="">email</label>
        <input :class="{error: $cEmail}" v-model="form.email" type="email" placeholder="Seu email" />
        <label for="">senha</label>
        <input :class="{error: $cSenha}" v-model="form.senha" type="password" placeholder="Sua senha" />
        <label for="">repita sua senha</label>
        <input
          :class="{error: $cRepeteSenha}"
          v-model="senhaRepete"
          type="password"
          placeholder="Repita sua senha"
        />
      </div>
      <div><button @click.prevent="validarFormulario">Criar</button></div>
      <div v-show="mMsg" class="msg">{{mMsg}}</div>
      <div v-if="mSucesso" class="sucesso">{{mSucesso}}</div>

    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { uuid } from 'vue-uuid'

export default {
  name: 'ModalUser',
  data () {
    return {
      form: {
        nome: '',
        email: '',
        senha: ''
      },
      senhaRepete: ''
    }
  },
  methods: {
    isEmpty (value) {
      return false
    },
    async clearForm () {
      this.form.nome = ''
      this.form.email = ''
      this.form.senha = ''
      this.senhaRepete = ''
    },
    validarFormulario () {
      this.mFirstLoad = true
      if (
        !this.$cNome &&
        !this.$cSenha &&
        !this.$cEmail &&
        !this.$cRepeteSenha
      ) {
        this.mMsg = ''
        this.salvarUsuario()
        this.mSucesso = 'Usuário salvo'
        this.mFirstLoad = false
      } else {
        this.mMsg = 'todos campos são obrigatórios'
      }
    },
    async salvarUsuario () {
      this.form.id = uuid.v4()
      await this.addUser(this.form)
      await this.clearForm()
    },
    ...mapActions([
      'addUser'
    ])
  }
}
</script>
<style lang="scss" scoped>
.container-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(#000, 0.3);
  z-index: 1;

  .box-modal {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    min-width: 350px;
    padding: 15px;
    border-radius: 7px;

    .form {
      display: flex;
      flex-direction: column;
    }

    .box-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
