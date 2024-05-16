<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="col-9 form">
    <div class="card">
      <div class="card-body">
        <div class="consultant d-flex flex-column justify-content-center align-items-center">
          <img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/marketing-consultant-expert.jpg" alt="">
          <div class="text d-flex flex-column justify-content-center text-center gap-2">
            <h2>Richard Madsen</h2>
            <h4>Marketing Consultant Expert</h4>
            <p class="d-flex justify-content-center align-items-center gap-3 num"><i class="fa-solid fa-phone"></i>351-4034568</p>
          </div>
        </div>
        <form class="d-flex flex-column gap-3">
          <div class="form-group">
            <input type="text" class="form-control" id="name" placeholder="Your Name*">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" id="email" placeholder="Your Email*">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" id="number" placeholder="Your Phone Number*">
          </div>
          <button type="button" class="btn ms_button text-light py-3 d-flex gap-3 justify-content-center align-items-center">
            <i class="fa-solid fa-phone"></i>Get A Callback
          </button>
          <p class="text-center conditions">By submitting my data I agree to be contacted</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.form-group {
  .form-control {
    height: 60px;
  }
}

.conditions {
  font-size: smaller;
}

.ms_button {
  background-color: #f86011;
  padding: 0.8rem 2.3rem;
  border-radius: 12px;
  font-size: 18px;
}

.ms_button:hover {
  background-color: #e04e10;
}

h2 {
  font-size: 28px;
}

h4 {
  font-size: 20px;
  color: gray;
}

.num {
  color: #f86011;
  font-size: 20px;
}
</style>
