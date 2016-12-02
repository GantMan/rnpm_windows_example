check_generators()
{
  echo '~~~🌟 Running Generator Tests'
  # Note to future self: You can add more generator:locations to this list!
  declare -a params=('component:components' 'container:containers' 'screen:containers' 'saga:sagas' 'redux:redux')

  # Loop through the generators array and create the files
  for i in "${params[@]}"
    do
      #This will work in BASH, not sure about other shells, though.
      IFS=':' read -a split <<< "${i}"
      ignite g ${split[0]} tester2${split[0]}
    done

  # Then make sure they've arrived.
  for i in "${params[@]}"
    do
      IFS=':' read -a split <<< "${i}"
      if [ ! -f 'App/'${split[1]}/'tester'${split[0]}*'.js' ]; then
        echo '👎 👎 👎 👎 👎 👎 👎 👎' ${split[0]} 'testing failed:' ${split[0]} 'js file was not generated in' ${split[1]} 'folder.'
        SOMETHING_FAILED=1
      fi
      # Check styles for certain types
      if [[ '${split[0]}' == 'component' || '${split[0]}' == 'container' || '${split[0]}' == 'screen' ]]; then
        if [ ! -f 'App/'${split[1]}'/Styles/tester'${split[0]}'Style.js' ]; then
          echo '👎 👎 👎 👎 👎 👎 👎 👎' ${split[0]} ' testing failed:' ${split[0]} 'style file not generated in' ${split[1]} 'folder.'
          SOMETHING_FAILED=1
        fi
      fi
    done
}

check_generators
