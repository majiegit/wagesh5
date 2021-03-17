<template>
  <div>
    <van-nav-bar
            title="应用中心"
            left-text=""
            @click-left="onClickLeft"
    />
  </div>
  <div class="center">
    <van-button type="primary" class="button" @click="gotowagens">工资查询</van-button>
    <van-button type="success" class="button"  @click="gotosummarize">年度汇总</van-button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            gotowagens(){
                this.$router.replace({name:'wagens'})
            } ,
            gotosummarize(){
                this.$router.replace({name:'summarize'})
            }
        }
    };
</script>

<style >
  .center{
 margin-top: 10px;
  }
  .button{
    width: 4rem;
    height: 4rem;
    margin-left: 20px;
    border-radius: 20%;
  }
</style>