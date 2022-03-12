<template>
  <div class="container">
    <ModalUser v-if="modal" />
    <ModalUserEdit v-if="modalEdit" />
    <ModalUserDetail v-if="modalDetail" />
    <TableUsers :headers="headers" />
  </div>
</template>
<script>
import { TableUsers, ModalUser, ModalUserEdit, ModalUserDetail } from '@/components'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    TableUsers,
    ModalUser,
    ModalUserEdit,
    ModalUserDetail
  },
  computed: {
    ...mapGetters(
      [
        'modal',
        'modalEdit',
        'modalDetail'
      ]
    )
  },
  data () {
    return {
      headers: ['ID', 'NOME', 'EMAIL', 'AÇÕES']
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
