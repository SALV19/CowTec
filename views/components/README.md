# Atomic Design Components

This directory contains the Atomic Design component system for the application.

## Structure

### 🔹 Atoms (`atoms/`)
Basic building blocks of the UI. These are the smallest functional units that can't be broken down further without losing their meaning.

**Examples:**
- Buttons
- Input fields
- Icons
- Labels
- Links
- Images

**Usage:**
```ejs
<%- include('components/atoms/button', { 
  text: 'Submit', 
  type: 'primary', 
  size: 'md' 
}) %>
```

### 🔸 Molecules (`molecules/`)
Combinations of atoms that work together as a unit. They serve a single purpose and are relatively simple.

**Examples:**
- Search form (input + button)
- KPI card (icon + number + label)
- Chart card (title + chart container)
- Navigation item (icon + text + link)

**Usage:**
```ejs
<%- include('components/molecules/kpi-card', { 
  title: 'Total Sales', 
  value: '87,543', 
  icon: 'dollar-sign',
  change: '+12%'
}) %>
```

### 🔷 Organisms (`organisms/`)
Complex UI components composed of molecules and/or atoms. They form distinct sections of an interface.

**Examples:**
- Header navigation
- Dashboard grid
- Charts section
- Footer
- Sidebar

**Usage:**
```ejs
<%- include('components/organisms/dashboard-grid', { 
  kpis: kpis,
  charts: charts
}) %>
```

### 📄 Templates (`../templates/`)
Page-level objects that place components into a layout and articulate the design's underlying content structure.

**Examples:**
- Dashboard template
- Charts template
- Error page template

## Principles

1. **Single Responsibility**: Each component should have one clear purpose
2. **Reusability**: Components should be reusable across different contexts
3. **Composition**: Larger components are built by composing smaller ones
4. **Data Flow**: Data flows down from templates → organisms → molecules → atoms
5. **Separation**: UI logic stays in components, business logic in controllers/models

## Naming Convention

- Use kebab-case for file names: `kpi-card.ejs`, `chart-container.ejs`
- Use descriptive names that indicate the component's purpose
- Include the component type in directory structure, not filename

## Parameters

Components should accept parameters for customization:

```ejs
<!-- atoms/button.ejs -->
<button 
  class="btn btn-<%= type || 'primary' %> btn-<%= size || 'md' %>"
  type="<%= buttonType || 'button' %>"
  <% if (disabled) { %>disabled<% } %>
>
  <% if (icon) { %>
    <i class="fas fa-<%= icon %> me-2"></i>
  <% } %>
  <%= text %>
</button>
```

## Best Practices

1. **Keep atoms simple**: Don't add business logic to atoms
2. **Make molecules focused**: Each molecule should serve one specific purpose
3. **Compose organisms thoughtfully**: Organisms should represent meaningful UI sections
4. **Pass data explicitly**: Don't rely on global variables in components
5. **Document parameters**: Comment what parameters each component expects
6. **Test in isolation**: Components should work independently of their context

## Migration Strategy

When refactoring existing views to use Atomic Design:

1. Identify reusable patterns in current templates
2. Extract atoms first (buttons, inputs, basic elements)
3. Build molecules from atoms (cards, forms, list items)
4. Create organisms from molecules (navigation, sections)
5. Update templates to use the new components
6. Remove old partials once fully migrated