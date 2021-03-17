<template>
  <div>
    <van-nav-bar
            title="工资查询"
            left-text=""
            @click-left="onClickLeft"
            left-arrow
    />
  </div>
  <div>
    <van-tabs v-model:active="active" background="#fff">
      <van-tab title="当前年度" title-style="color:rgb(65,182,213);" >
        <div style="width: 100%; height: 50px; background: #fff">
          <div class="buttonDiv">
            <van-button type="primary" class="dateTimeButton" @click="showDateDialog">选择查询时间</van-button>
          </div>
          <div  class="buttonDiv">
           <van-button type="primary" class="selectButton" @click="selectList">立即查询</van-button>
          </div>
        </div>
        <div>
        </div>
        <div style="width: 100%; color: rgb(102,102,102);" v-for="(item,i) in dataList" :key="i">
          <div class="dataDiv" v-for="(mouth,g) in item.mouths" :key="g">
            <div class="dataDivLeft">
             <p>
               <span>{{mouth.mouth}}</span>
               <br/>
               <span>{{item.year}}</span>
             </p>
            </div>
            <div  class="dataDivRight">
              <div class="mouthDataDiv">
                <div class="mouthDataDivLeft"><span>应发合计</span></div>
                <div class="mouthDataDivRight">{{mouth.data.shouldSend}}</div>
              </div>
              <div class="mouthDataDiv">
                <div class="mouthDataDivLeft"><span>个人所得税</span></div>
                <div class="mouthDataDivRight">{{mouth.data.tax}}</div>
              </div>
              <div class="mouthDataDiv">
                <div class="mouthDataDivLeft"><span>扣款合计</span></div>
                <div class="mouthDataDivRight">{{mouth.data.deductMoney}}</div>
              </div>
              <div class="mouthDataDiv">
                <div class="mouthDataDivLeft"><span>实发合计</span></div>
                <div class="mouthDataDivRight">{{mouth.data.practicalSend}}</div>
              </div>
              <div class="mouthDataDiv">
                <div class="mouthDataDivLeft"><span>养老</span></div>
                <div class="mouthDataDivRight">{{mouth.data.provideOld}}</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="年度汇总" to="summarize"></van-tab>
    </van-tabs>
  </div>
  <van-dialog v-model:show="show" title="选择查询区间" show-cancel-button @confirm=dateSelect>
    <div  style="width: 100%; height:180px;">
      <div style="width: 50%;  float: left">
        <van-datetime-picker
                v-model="startDate"
                type="year-month"
                show-toolbar="false"
                title="选择开始日期"
                confirm-button-text=" "
                cancel-button-text=" "
                item-height="20"
        />
      </div>
      <div  style="width: 50%; float: left">
        <van-datetime-picker
                v-model="endDate"
                type="year-month"
                show-toolbar="false"
                title="选择结束日期"
                confirm-button-text=" "
                cancel-button-text=" "
                item-height="20"
        />
      </div>

    </div>
  </van-dialog>
</template>

<script>
    import moment from 'moment'
export default {
    data() {
        return {
            startDate:new Date(),
            endDate:new Date(),
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
            ],
            show:false
        }
    },
    methods: {
        dateSelect(){
            alert(moment(this.startDate).format("YYYY-MM-DD HH:mm:ss"))
            alert(moment(this.endDate).format("YYYY-MM-DD HH:mm:ss"))
        },
        selectList(startDate,endDate){
            console.log(startDate)
            console.log(endDate)
        },
        showDateDialog () {
          this.show=true
        },
        onClickLeft(){
            this.$router.replace({name:'index'})
        },
        gotosummarize(){
            this.$router.replace({name:'summarize'})
        }
    }
};
</script>

<style lang="less">
  .van-picker__title{
    font-size: 13px !important;
  }
  .mouthDataDiv:last-of-type .mouthDataDivRight { border-bottom: none;}
  .mouthDataDiv:last-of-type .mouthDataDivLeft{ border-bottom: none;}
  .dataDiv{
    width: 100%;
    height: 255px;
    background: #fff;
    margin-top: 10px;
  }
  .dataDivLeft{
    font-size: 16px;
    width: 25%;
    height: 255px;
    float: left;
    text-align: center;
  }
  .dataDivLeft p{
    padding:90px 0;
  }
  .dataDivRight{
    width: 74%;
    float: left;
    height: 255px;
    border-left: 1px solid rgb(239,239,244);
    margin-left: 1px;
  }
  .mouthDataDiv{
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .mouthDataDivLeft{
    width: 50%;
    float: left;
    height: 50px;
    border-bottom: 1px solid rgb(239,239,244);
  }
  .mouthDataDivLeft span{
    margin-left: 20px;
  }
  .mouthDataDivRight{
    text-align: center;
    width: 50%;
    float: left;
    height: 50px;
    color: rgb(65,182,213);
    border-bottom: 1px solid rgb(239,239,244);
  }
  .buttonDiv{
    width: 50%;
    height: 50px;
    float: left;
    text-align:center;
    margin-top: 10px;
  }
.dateTimeButton{
  width: 120px;
  height: 32px;
  border-radius: 5px;
  border:none;
  color: #fff;
  background: rgb(65,182,213);
}
.selectButton{
  width: 100px;
  height: 32px;
  margin-left: 20%;
  border-radius: 5px;
  border:none;
  color: #fff;
  background: rgb(65,182,213);
}
</style>
