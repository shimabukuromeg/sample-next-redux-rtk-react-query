import {
  FormControl,
  Checkbox,
  Button,
  VStack,
  Heading,
  HStack,
  Input,
  Text,
  Divider,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useForm, Controller } from 'react-hook-form';

const checkBoxArray = ['value one', 'value two', 'value three'];

  type TFormValues = {
    'value one': boolean;
    'value two': boolean;
    'value three': boolean;
  };

const defaultValues = {
  'value one': false,
  'value two': false,
  'value three': false,
};

  type TCheckBoxNames = 'value one' | 'value two' | 'value three';

function HookForm(): ReactElement {
  const { handleSubmit, control, reset } = useForm<TFormValues>({
    defaultValues,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <>
      <Heading size="lg" mb="6">
        CheckBox Array
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl>
          <VStack alignItems="flex-start">
            {checkBoxArray.map(
              (cbName): ReactElement => (
                <Controller
                  control={control}
                  name={cbName as TCheckBoxNames}
                  key={cbName}
                  defaultValue={false}
                  render={({ field: { onChange, value, ref } }) => (
                    <Checkbox
                      onChange={onChange}
                      textTransform="capitalize"
                      ref={ref}
                      isChecked={value}
                    >
                      {cbName}
                    </Checkbox>
                  )}
                />
              ),
            )}
          </VStack>
        </FormControl>
        <HStack mt="8" gridGap="full">
          <Button outline="none" bg="red.100" type="submit">
            保存とリセット
          </Button>
        </HStack>
        <Divider mt="12" />
      </form>
    </>
  );
}

export { HookForm };
