const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const { resolver } = require('./metro.config')

const root = path.resolve(__dirname, '..')
const node_modules = path.join(__dirname, 'node_modules')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.module.rules.push(
    {
      test: /.(ts|tsx|js|jsx)$/,
      include: path.resolve(root, 'src'),
      use: 'babel-loader'
    },
    // This would match ui-kitten
    {
      test: /@?(ui-kitten|eva-design).*\.(ts|js)x?$/,
      loader: 'babel-loader'
    }
  )

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in node_modules
  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
    'react-native-web': path.join(node_modules, 'react-native-web'),
    'react-native-elements': path.join(node_modules, 'react-native-elements'),
    '@expo/vector-icons/MaterialCommunityIcons': require.resolve('@expo/vector-icons/MaterialCommunityIcons')
  })

  return config
}
