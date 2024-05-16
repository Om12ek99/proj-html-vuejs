<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<template>

  <div class="container">
    <div class="row">
      <div class="col">


      </div>
      <div class="col-md-4 offset-md-3">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" class="form-control" id="name" placeholder="Inserisci il tuo nome" />
              </div>
              <div class="form-group">
                <label for="surname">Cognome</label>
                <input type="text" class="form-control" id="surname" placeholder="Inserisci il tuo cognome" />
              </div>
              <div class="form-group">
                <label for="number">Numero</label>
                <input type="number" class="form-control" id="number" placeholder="Ad. es. (+39 345 ecc)" />
              </div>

              <div class="form-group">
                <label for="email">Indirizzo email</label>
                <input type="email" class="form-control" id="email" placeholder="Inserisci il tuo indirizzo email" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">la tua sfida</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <!-- ciao -->
              </div>

              <select class="form-select" aria-label="Default select example">
                <option selected>Servizi</option>
                <option value="1">Digital Marketing</option>
                <option value="2">Web Strategy</option>
                <option value="3">Web Development</option>
              </select>
              <button type="submit" class="btn btn-primary">Iscriviti</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>