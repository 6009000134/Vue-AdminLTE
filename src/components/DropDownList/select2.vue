<template>
  <div>
    <div class="form-group">
      <select
        class="form-control select2 select2-hidden-accessible"
        style="width: 100%;"
        tabindex="-1"
        aria-hidden="true"
      >
        <option selected="selected">Alabama</option>
        <option>Alaska</option>
        <option>California</option>
        <option>Delaware</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Washington</option>
      </select>
      <span
        class="select2 select2-container select2-container--default select2-container--below"
        dir="ltr"
        style="width: 100%;"
      >
        <span class="selection">
          <span
            class="select2-selection select2-selection--single"
            role="combobox"
            aria-haspopup="true"
            aria-expanded="false"
            tabindex="0"
            aria-labelledby="select2-w98q-container"
          >
            <span
              class="select2-selection__rendered"
              id="select2-w98q-container"
              title="Texas"
            >Texas</span>
            <span class="select2-selection__arrow" role="presentation">
              <b role="presentation"></b>
            </span>
          </span>
        </span>
        <span class="dropdown-wrapper" aria-hidden="true"></span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {};
  }
};
</script>