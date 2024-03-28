'use client';

import { Switch } from '@ark-ui/react/switch';

import { FC } from 'react';

export const BaseSwitch: FC = () => (
  <Switch.Root>
    {(api) => {
      return (
        <>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label>Feature is {api.isChecked ? 'enabled' : 'disabled'}</Switch.Label>
        </>
      );
    }}
  </Switch.Root>
);
