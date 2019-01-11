<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="20" class="logo">
        <!--<img src="../assets/logo4.png" />
        <span>ERP</span>-->
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner">{{UserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>-->
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
<!--
    <el-col :span="24" class="main">
      <aside>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title">
                <i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden" @click="reloadUrl(child)">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
          </template>
        </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <div class="grid-content-inner">
            <el-col :span="24" class="breadcrumb-container">
              <strong class="title" id="routename">{{routerName}}</strong>
              <el-breadcrumb separator="/" v-show="$route.name!=''" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :to="{ path: item.path}">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="24" class="content-wrapper">
              <transition name="slide-fade">
                <router-view ref="comp"></router-view>
              </transition>
            </el-col>
          </div>
        </div>
      </section>
    </el-col>
-->
  </el-row>
</template>

<script>

import foo from '../common/js/com.js';


export default {
    data(){
        return{}
    },    
    methods: {      
        checklogin(){ 
            
             if(foo.CheckLogin())
             {
                 console.log("未登录");   
                 this.$router.push("login");
             }
        },
        logout()
        {
           foo.logout();
           this.$router.push("login");
        }   
    },
    mounted()
    {    
        this.checklogin();
    },
    created()
    {
        this.$store.dispatch("getRouterName", this.$route.name);
    },
    watch()
    {

    },
    computed:
    {
        UserId()
        {
            return this.$store.state.UserId;
        },
        UserName()
        {
            return this.$store.state.UserName;
        }
    }

};

</script>
