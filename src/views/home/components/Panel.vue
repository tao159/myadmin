<template>
  <el-row :gutter="40" class="viewCard">
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      v-for="(item, index) in cardData"
      :key="index"
    >
      <div class="cardItem">
        <section :class="'cardItem_left ' + item.className">
          <section>
            <i :class="'icon iconfont ' + item.icon"></i>
          </section>
        </section>
        <section class="cardItem_right">
          <h3>
            <animate-number
              :from="item.num.from"
              :to="item.num.to"
              :duration="duration"
              :formatter="formatter"
            ></animate-number>
          </h3>
          <p v-text="item.title">收入总额</p>
        </section>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
    props:{
        duration:[Number]
    },
  data() {
    return {
      cardData: [
        {
          className: "cardItem_price",
          icon: "icon-renminbi",
          num: {
            from: 0,
            to: 125000,
          },
          title: "收入总额",
          formatter: "priceFormatter",
        },
        {
          className: "cardItem_order",
          icon: "icon-order1",
          num: {
            from: 0,
            to: 5008,
          },
          title: "总订单",
        },
        {
          className: "cardItem_user",
          icon: "icon-kehu",
          num: {
            from: 0,
            to: 3788,
          },
          title: "总客户",
        },
        {
          className: "cardItem_product",
          icon: "icon-wodechanpin",
          num: {
            from: 0,
            to: 2080,
          },
          title: "总产品",
        },
      ],
    };
  },
  methods: {
    formatter: function(num) {
      return num.toFixed(2); //小数点后几位，数字就是几小数点后几位
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.viewCard {
  & > .el-col {
    height: 108px;
    margin-bottom: 10px;
    .cardItem {
      height: 100%;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      border-radius: 4px;
      cursor: pointer;
      .cardItem_left {
        width: 108px;
        line-height: 108px;
        height: 108px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        section {
          width: 80px;
          height: 80px;
          line-height: 80px;
          text-align: center;
          transition: all 0.4s;
          border-radius: 6px;
        }
        i {
          font-size: 50px;
          display: block;
        }
      }
      .cardItem_price {
        section {
          i {
            color: #40c9c6;
            margin-left: -5px;
          }
          &:hover {
            background: #40c9c6;
            i {
              color: #fff;
            }
          }
        }
      }
      .cardItem_order {
        section {
          i {
            color: rgb(251,114,147);
          }
          &:hover {
            background: rgb(251,114,147);
            i {
              color: #fff;
            }
          }
        }
      }
      .cardItem_user {
        section {
          i {
            color: #36a3f7;
          }
          &:hover {
            background: #36a3f7;
            i {
              color: #fff;
            }
          }
        }
      }
      .cardItem_product {
        section {
          i {
            color: #e6a23c;
          }
          &:hover {
            background: #e6a23c;
            i {
              color: #fff;
            }
          }
        }
      }
      .cardItem_right {
        flex: 1;
        text-align: right;
        padding-right: 35px;
        h3 {
          font-size: 26px;
          margin: 10px 0;
          color: #666;
        }
        p {
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }
      }
    }
  }
}
</style>
