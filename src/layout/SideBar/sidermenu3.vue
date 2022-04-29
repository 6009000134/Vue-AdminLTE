<script>
import { addClass, removeClass, hasClass } from "./dom.js";
export default {
  props: {
    treeData: {
      type: Array
    },
    defaultMenu: {
      type: Number,
      default() {
        return 6;
      }
    }
  },
  data() {
    return {
      activeMenu: 0
    };
  },
  methods: {
    setActiveMenu(menuID) {
      console.log(menuID);
      this.activeMenu = menuID;
    },
    collapseMenu(e, cls) {
      if (hasClass(e, "menu-open")) {
        removeClass(e, "menu-open");
      } else {
        addClass(e, "menu-open"); //给当前原始设置样式
      }
      if (e.getElementsByTagName("ul")[0].style.display == "block") {
        e.getElementsByTagName("ul")[0].style.display = "none";
      } else {
        // e.getElementsByTagName("ul")[0].style.transition  = "1000ms";
        e.getElementsByTagName("ul")[0].style.display = "block";
      }
    },
    createChild(h, data) {
      var self = this;
      return data.map(item => {
        if (item.ChildMenu.length > 0) {
          return this.$createElement(
            "li",
            {
              class: {
                treeview: true,
                "menu-open": true
              },
              on: {
                click($event) {
                  self.collapseMenu($event.currentTarget, "menu-open");
                  $event.stopPropagation();
                }
              }
            },
            [
              this.$createElement(
                "a",
                {
                  attrs: { href: "javascript:void(0)" }
                  // ,                  on: { click: this.setActiveMenu }
                },
                [
                  this.$createElement("i", {
                    class: { fa: true, "fa-dashboard": true }
                  }),
                  this.$createElement("span", [item.MenuName + "|" + item.ID]),
                  this.$createElement(
                    "span",
                    { class: { "pull-right-container": true } },
                    [
                      this.$createElement("i", {
                        class: {
                          fa: true,
                          "fa-angle-left": true,
                          "pull-right": true
                        }
                      })
                    ]
                  )
                ]
              ),
              this.$createElement(
                "ul",
                {
                  class: { "treeview-menu": true },
                  style: {
                    display: "block"
                  }
                },
                this.createChild(h, item.ChildMenu)
              )
            ]
          );
        } else {
          return this.createBottomMenu(h, item);
        }
      });
    },
    createBottomMenu(h, data) {
      var self = h;
      return this.$createElement(
        "li",
        {
          class: { active: data.ID == self.activeMenu },
          on: {
            click($event) {
              self.setActiveMenu(data.ID);
              $event.stopPropagation(); //todo:所有render中click事件必须要stopPropapgation来组织冒泡吗？是否有其他写法不用调用组织冒泡
            }
          }
        },
        [
          this.$createElement(
            "a",
            {
              attrs: { href: "javascript:void(0)" }
            },
            [
              this.$createElement("i", {
                class: { fa: true, "fa-circle-o": true }
              }),
              this.$createElement("span", [data.MenuName + "|" + data.ID])
            ]
          )
        ]
      );
    }
  },
  render(h) {
    return h("aside", { class: { "main-sidebar": true } }, [
      this.$createElement(
        "section",
        {
          class: { sidebar: true },
          style: { height: "auto" }
        },
        [
          this.$createElement(
            "ul",
            {
              class: { "sidebar-menu": true, tree: true }
            },
            this.treeData.map(item => {
              if (item.ChildMenu.length > 0) {
                return this.createChild(this, item.ChildMenu);
              } else {
                return this.createBottomMenu(this, item);
              }
            })
          )
        ]
      )
    ]);
  },
  mounted() {}
};
</script>