<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-xs-6">
          <div class="box box-primary">
            <div class="box-header">
              <h1>Input控件</h1>
            </div>
            <div class="box-body">
              <input type="text" class="form-control" />
              <select2></select2>
              <span class="select2-container select2-container--default select2-container--open" style="position: absolute; top: 220px; left: 255px;"><span class="select2-dropdown select2-dropdown--below" dir="ltr" style="width: 499px;"><span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox"></span><span class="select2-results"><ul class="select2-results__options" role="tree" id="select2-w98q-results" aria-expanded="true" aria-hidden="false"><li class="select2-results__option" id="select2-w98q-result-832n-Alabama" role="treeitem" aria-selected="false">Alabama</li><li class="select2-results__option" id="select2-w98q-result-b2lc-Alaska" role="treeitem" aria-selected="true">Alaska</li><li class="select2-results__option" id="select2-w98q-result-tfck-California" role="treeitem" aria-selected="false">California</li><li class="select2-results__option" id="select2-w98q-result-ultc-Delaware" role="treeitem" aria-selected="false">Delaware</li><li class="select2-results__option select2-results__option--highlighted" id="select2-w98q-result-rjfs-Tennessee" role="treeitem" aria-selected="false">Tennessee</li><li class="select2-results__option" id="select2-w98q-result-7yli-Texas" role="treeitem" aria-selected="false">Texas</li><li class="select2-results__option" id="select2-w98q-result-b058-Washington" role="treeitem" aria-selected="false">Washington</li></ul></span></span></span>
            </div>
            <div class="box-footer"></div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="box box-primary">
            <div class="box-header"></div>
            <div class="box-body"></div>
            <div class="box-footer"></div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>
<script>
import select2 from "@/components/DropDownList/select2.vue";
export default {
  name: "List",
  components: { select2 }
};
</script>