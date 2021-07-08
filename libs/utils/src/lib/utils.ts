/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError } from 'apollo-client';
import { Plugins } from '@capacitor/core';
import { Observable, Subscription } from 'rxjs';

const { Storage } = Plugins;

export enum LocalStorageKey {
  SYNCSPACE_USER = 'SYNCSPACE_USER',
}

export const convertFilesToBase64Strings = async (event: Event): Promise<string[]> => {
  const base64Strings: string[] = [];
  const files: any = (event.target as HTMLInputElement).files;
  for (const file of files) {
    const filePath: string = await new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve((fileReader.result as string));
      fileReader.readAsDataURL(file);
    });
    base64Strings.push(filePath);
  }
  return base64Strings;
};

export const getValueFromObservable = (obj: Observable<any>) => {
  let value: any;
  const subscription: Subscription = obj.subscribe(v => value = v);
  subscription.unsubscribe();
  return value;
};

export const capitalizeFirstCharacter = (s: string): string => {
  if (typeof s !== "string") {
      return "";
  }
  return `${s.charAt(0).toUpperCase()}${s.slice(1)?.toLowerCase()}`;
};

export const saveDataToLocalStorage = async <T>(key: LocalStorageKey, data: T): Promise<void> => {
  await Storage.set({ key, value: JSON.stringify(data) });
}

export const getDataFromLocalStorage = async <T>(key: LocalStorageKey): Promise<T> => {
  const { value } = await Storage.get({ key });
  return JSON.parse(value);
};

export const deleteDataFromLocalStorage = async (key: LocalStorageKey): Promise<void> => {
  await Storage.remove({ key });
}

export const parseErrorMessage = (error: ApolloError | Error): string => {
  if (error instanceof ApolloError) {
    const { graphQLErrors: [firstErrorBlock] } = error;
    return firstErrorBlock.message;
  } else {
    return error.message;
  }
}
