<template>
  <div class="table-users">
    <div class="crud">
      <button @click.prevent="$store.commit('openCloseModal' ,true)">Adicionar novo usuário</button>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.nome}}</td>
          <td>{{user.email}}</td>
          <td>
            <div class="actions">
              <button @click="deletar(index)">deletar</button>
              <button @click="editar(index)">editar</button>
              <button @click="detalhe(index)">Detalhes</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TableUsers',
  props: {
    headers: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'users',
      'indexUser'
    ])
  },
  methods: {
    ...mapActions([
      'addIndexUser',
      'removeUser'
    ]),
    editar (index) {
      this.$store.commit('addIndexUser', index)
      this.$store.commit('openCloseModalEdit', true)
    },
    deletar (index) {
      this.$store.commit('addIndexUser', index)
      this.$store.commit('removeUser', index)
    },
    detalhe (index) {
      this.$store.commit('addIndexUser', index)
      this.$store.commit('openCloseModalDetail', true)
    }
  }
}
</script>
<style lang="scss" scoped>
.table-users {
  padding: 10px 15px;

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    background-color: #fff;
    border-radius: 7px;

    thead, tbody {
      tr {
        height: 36px;
        border-bottom: 1px solid #d3d3d3!important;
        border-radius: 7px 7px 0 0;
      }

      td, th {
        padding: 0 10px;
      }
    }
    tbody {
      tr {
        transition: .2s ease-in-out;

        &:nth-child(even) {
          background-color: #ececec;
        }

        &:hover {
          background-color: #FE8E2A;
        }
      }
    }
  }
}
.crud {
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
}

.actions {
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .action {
    cursor: pointer;
    background-color: blue;
    border-radius: 4px;
    padding: 3px 7px;
    margin: 4px;
  }
}
</style>
