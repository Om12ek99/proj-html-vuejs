<script>

import AppCard from "../components/AppCard.vue";
export default {
    components: {
    
      AppCard,
     
    }
}
</script>

<template>

   
      
        <div class="card" >
          <div class="card-body">
            <form>
              <div class="form-grou py-2">
                <label for="name">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Inserisci il tuo nome"
                />
              </div>
              <div class="form-group py-2">
                <label for="surname">Cognome</label>
                <input
                  type="text"
                  class="form-control"
                  id="surname"
                  placeholder="Inserisci il tuo cognome"
                />
              </div>
              <div class="form-group py-3">
                <label for="number">Numero</label>
                <input
                  type="number"
                  class="form-control"
                  id="number"
                  placeholder="Ad. es. (+39 345 ecc)"
                />
              </div>

              <div class="form-group py-3">
                <label for="email">Indirizzo email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Inserisci il tuo indirizzo email"
                />
              </div>

              <div class="mb-3 py-2">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >la tua sfida</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <select class="form-select py-2" aria-label="Default select example">
                <option selected>Servizi</option>
                <option value="1">Digital Marketing</option>
                <option value="2">Web Strategy</option>
                <option value="3">Web Development</option>
              </select>
              <div class="d-grid gap-2 py-3">
                <button class="btn btn-warning" type="button">Button</button>
              </div>
            </form>
          </div>
        </div>
  
  
</template>

<style></style>
