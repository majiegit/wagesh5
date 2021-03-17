<template>
  <div>
    <van-nav-bar
            title="年度汇总"
            left-text=""
            @click-left="onClickLeft"
            left-arrow
    />
  </div>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(item,i) in dataList" :key="i"  :name="i">
        <template #title>
          <div style="color: rgb(102,102,102);">{{item.year}}</div>
        </template>
        <template #value>
          <div>
            <span>合计:</span>
            <span style="color: rgb(65,182,213);margin:0px 20px;">{{item.shouldSend}}</span>
          </div>
        </template>
        <div style="width: 100%; background: #fff; padding: 3px 0px;">
          <div  class="dataDivOne" v-for="(mouth,g) in item.mouths" :key="g">
            <div class="mouthDataDivOne">
              <div class="mouthDataDivOneLeft"><span>{{mouth.mouth}}</span></div>
              <div class="mouthDataDivOneRight">{{mouth.data.shouldSend}}</div>
            </div>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>

export default {

  data() {
    return {
        activeNames:['1'],
        dataList:[
            {
                "year":"2020年",
                "shouldSend":152555,
                "practicalSend":152555,
                "mouths": [
                    {
                        "mouth": "7月",
                        "data": {
                            "shouldSend": 5000,
                            "tax": "152",
                            "deductMoney": 5000,
                            "practicalSend": "152",
                            "provideOld": "152"

                        }
                    },
                    {
                        "mouth": "8月",
                        "data": {
                            "shouldSend": 5000,
                            "tax": "152",
                            "deductMoney": 5000,
                            "practicalSend": "152",
                            "provideOld": "152"

                        }
                    },
                    {
                        "mouth": "9月",
                        "data": {
                            "shouldSend": 5000,
                            "tax": "152",
                            "deductMoney": 5000,
                            "practicalSend": "152",
                            "provideOld": "152"

                        }
                    }
                ]
            },
            {
                "year":"2021年",
                "shouldSend":152555,
                "practicalSend":152555,
                "mouths": [
                    {
                        "mouth": "7月",
                        "data": {
                            "shouldSend": 5000,
                            "tax": "152",
                            "deductMoney": 5000,
                            "practicalSend": "152",
                            "provideOld": "152"

                        }
                    },
                    {
                        "mouth": "8月",
                        "data": {
                            "shouldSend": 5000,
                            "tax": "152",
                            "deductMoney": 5000,
                            "practicalSend": "152",
                            "provideOld": "152"

                        }
                    },
                    {
                        "mouth": "9月",
                        "data": {
                            "shouldSend": 5000,
                            "tax": "152",
                            "deductMoney": 5000,
                            "practicalSend": "152",
                            "provideOld": "152"

                        }
                    }
                ]
            }
        ]
    };
  },

  computed: {
  },

  methods: {
      onClickLeft(){
          this.$router.replace({name:'index'})
      }
  }
};
</script>

<style lang="less">
  .van-collapse-item__content{
    padding: 0px 0px;
  }
  .dataDivOne{
    width:100%;
    background: #fff;
  }
  .mouthDataDivOne{
    font-size: 15px;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .mouthDataDivOneLeft{
    width: 50%;
    float: left;
    height: 40px;
   // border-bottom: 1px solid rgb(239,239,244);
  }
  .mouthDataDivOneLeft span{
    margin-left: 40px;
  }
  .mouthDataDivOneRight{
    text-align: center;
    width: 50%;
    float: left;
    height: 40px;
    color: rgb(65,182,213);
    //border-bottom: 1px solid rgb(239,239,244);
  }
</style>
