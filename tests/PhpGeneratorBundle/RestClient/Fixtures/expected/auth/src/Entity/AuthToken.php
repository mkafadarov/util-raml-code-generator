<?php

namespace Paysera\Test\AuthClient\Entity;

use Paysera\Component\RestClientCommon\Entity\Entity;

class AuthToken extends Entity
{
    public function __construct(array $data = [])
    {
        parent::__construct($data);
    }

    /**
     * @return string
     */
    public function getValue()
    {
        return $this->get('value');
    }
    /**
     * @param string $value
     * @return $this
     */
    public function setValue($value)
    {
        $this->set('value', $value);
        return $this;
    }
}
