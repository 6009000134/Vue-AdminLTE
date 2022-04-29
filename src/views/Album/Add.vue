<template>
  <div>
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-danger">
            <div class="box-header"></div>
            <div class="box-body">
              <input type="file" multiple="multiplt" @change="upload" class="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { uploadFile } from "@/API/test";
export default {
  data() {
    return {};
  },
  methods: {
    upload(e) {
      if (e.target.files.length > 0) {
        let formdata = new FormData();
        for (var i = 0; i < e.target.files.length; i++) {
          formdata.append(i, e.target.files[i], e.target.files[i].name);
        }
        uploadFile(formdata).then(res => {
          console.log(res);
        });
      } else {
        this.$toast.error({ message: "请上传文件！" });
      }
    }
  }
};
</script>