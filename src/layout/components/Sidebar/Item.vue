<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      console.log(icon)
      // vnodes.push(<img src={require(`@/assets/icon/${icon}.png`)} />)
      // if (icon.includes('el-icon')) {
      //   // vnodes.push(<i class={[icon, 'sub-el-icon']} />)
      //   vnodes.push(<img src={"require(`@/assets/icon/${item.icon}.png`)"} />)
      // } else {
      //   vnodes.push(<svg-icon icon-class={icon}/>)
      // }
    }

    if (title) {
      vnodes.push(<span slot='title' style="margin-left: 14px">{(title)}</span>)
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
