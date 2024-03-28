/**
 * Optimizing Bundle Size for `@ark-ui/react` Imports
 *
 * When integrating `@ark-ui/react` components into your project, it's essential
 * to consider the impact on the final bundle size. Below are two different
 * import variants, with their effects on the bundle size:
 *
 * 1. General Import: Using a general import statement like `import { Accordion
 *    } from '@ark-ui/react';` can inadvertently include all components from
 *    `@ark-ui/react` in your final bundle. Bundle analyzers have indicated that
 *    this approach leads to a larger overall size due to the inclusion of
 *    unused components.
 *
 *    Example:
 *    ```
 *    import { Accordion } from '@ark-ui/react'; // This imports all components, increasing bundle size.
 *    ```
 *
 * 2. Specific Import: For a more efficient bundle size, specifically import
 *    only the components you need. For example, `import { Accordion } from
 *    '@ark-ui/react/accordion';` ensures that only the Accordion component (and
 *    its dependencies) are included in your bundle. Bundle analyzers confirm
 *    this method significantly reduces the final bundle size by excluding
 *    unrelated components.
 *
 *    Example:
 *    ```
 *    import { Accordion } from '@ark-ui/react/accordion'; // Only the Accordion component is included.
 *    ```
 *
 * Recommendation: To optimize your application's performance and loading time,
 * prefer using specific imports wherever possible. This practice ensures you're
 * only bundling the components you use, thus minimizing the final bundle size.
 */

import { Accordion } from '@ark-ui/react';
// import { Accordion } from '@ark-ui/react/accordion';

import ChevronDownIcon from 'lucide-react/dist/esm/icons/chevron-down';

import '../../../styles/ark/accordion-animation.css';

import { Switch } from '@components/ark';

export default function ArkPage() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Accordion.Root defaultValue={['React']}>
        <>
          {['React', 'Solid', 'Vue'].map((item, id) => (
            <Accordion.Item key={id} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDownIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                {item} is a JavaScript library for building user interfaces.
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </>
      </Accordion.Root>
      <section
        style={{
          width: '100%',
        }}
      >
        <Switch.BaseSwitch />
      </section>
    </div>
  );
}
