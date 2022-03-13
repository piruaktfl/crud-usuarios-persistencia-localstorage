<template>
  <div class="container-modal" @click.self="$store.commit('openCloseModalEdit' ,false)">
    <div class="box-modal">
      <div class="box-header">
        <span>Editar usuário</span>
        <button @click.prevent="$store.commit('openCloseModalEdit' ,false)">x</button>
      </div>
      <div class="form">
        <label for="">nome</label>
        <input :class="{error: $cNome}" v-model="form.nome" type="text" placeholder="Seu nome" />
        <label for="">email</label>
        <input :class="{error: $cEmail}" v-model="form.email" type="email" placeholder="Seu email" />
      </div>
      <div><button @click.prevent="validarFormulario()">Salvar</button></div>
      <div v-show="mMsg" class="msg">{{mMsg}}</div>
      <div v-if="mSucesso" class="sucesso">{{mSucesso}}</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ModalUserEdit',
  data () {
    return {
      form: {
        nome: '',
        email: ''
      },
      senhaRepete: '',
      validForm: false
    }
  },
  mounted () {
    const novoDados = Object.assign({}, this.users[this.indexUser])
    this.form = novoDados
  },
  computed: {
    ...mapGetters([
      'users',
      'indexUser'
    ])
  },
  methods: {
    validarFormulario () {
      this.mFirstLoad = true
      if (
        !this.$cNome &&
        !this.$cEmail
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
      await this.editUser(this.form)
    },
    ...mapActions([
      'editUser'
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
