import Link from 'next/link';
import ChevronDownIcon from 'lucide-react/dist/esm/icons/chevron-down';

import { Accordion } from '@ark-ui/react';

type NavItem = {
  name: string;
  children: Array<{ name: string; href: string; disabled: boolean }>;
};

const navItems: Array<NavItem> = [
  {
    name: 'Group 1',
    children: [
      { name: 'Group 1 - Item 1', href: '/test/1/1', disabled: false },
      { name: 'Group 1 - Item 2', href: '/test/1/2', disabled: true },
      { name: 'Group 1 - Item 3', href: '/test/1/3', disabled: true },
      { name: 'Group 1 - Item 4', href: '/test/1/4', disabled: true },
    ],
  },
  {
    name: 'Group 2',
    children: [
      { name: 'Group 2 - Item 1', href: '/test/2/1', disabled: false },
      { name: 'Group 2 - Item 2', href: '/test/2/2', disabled: true },
    ],
  },
  {
    name: 'Group 3',
    children: [{ name: 'Group 3 - Item 1', href: '/test/3/1', disabled: true }],
  },
];

export default function ArkPageOtherProps() {
  return (
    <Accordion.Root multiple collapsible defaultValue={navItems.map((navItem) => navItem.name)}>
      {navItems.map((menuItem) => (
        <Accordion.Item defaultOpen key={menuItem.name} value={menuItem.name}>
          <Accordion.ItemTrigger>
            <span>{menuItem.name}</span>
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: '0.5rem',
              }}
            >
              {menuItem.children.map(({ name, href, disabled }) => {
                return (
                  <div key={name} style={{ width: '100%', textDecoration: 'none' }}>
                    {!disabled ? (
                      <Link passHref href={href}>
                        <button>{name}</button>
                      </Link>
                    ) : (
                      <button disabled>{name}</button>
                    )}
                  </div>
                );
              })}
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
