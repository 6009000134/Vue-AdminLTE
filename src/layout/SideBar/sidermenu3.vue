<script>
import $ from "jquery";
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
      this.activeMenu = menuID;
    },
    collapseMenu(e, cls) {
      if (hasClass(e, "menu-open")) {
        removeClass(e, "menu-open");
        $(e)
          .children("ul.treeview-menu")
          .slideUp("fast");
      } else {
        addClass(e, "menu-open"); //给当前原始设置样式
        $(e)
          .children("ul.treeview-menu")
          .slideDown("fast");
      }
    },
    createChild(h, item) {
      var self = this;
      console.log(item, item.MenuName);
      if (item.ChildMenu.length > 0) {
        return this.$createElement(
          "li",
          {
            class: {
              treeview: true,
              "menu-open": false
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
                  display: "none"
                }
              },
              [
                item.ChildMenu.map(item2 => {
                  return this.createChild(h, item2);
                })
              ]
            )
          ]
        );
      } else {
        console.log(item, item.MenuName, "3");
        return this.createBottomMenu(h, item);
      }
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
              console.log(item, "1");
              if (item.ChildMenu.length > 0) {
                return this.createChild(this, item);
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